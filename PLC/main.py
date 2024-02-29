

from fastapi import FastAPI
from pycomm3 import LogixDriver
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

PLC_IP= '127.0.0.1/2'
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/velocity")
async def get_velocity():
   with LogixDriver(PLC_IP) as plc:
        actual_velocity = plc.read('velocity')
        actual_position = plc.read('position')
        BA1_actual_velocity = plc.read('BA1_Actual_Velocity')
        BA1_actual_position = plc.read('BA1_Actual_Position')
        
        return {'actual_velocity': actual_velocity.value, 'actual_position': actual_position.value, 
                'BA1_actual_velocity': BA1_actual_velocity.value, 'BA1_actual_position': BA1_actual_position.value}
   


@app.post("/target_pos")
async def update_target_pos(target_pos: int):
    with LogixDriver(PLC_IP) as plc:
        plc.write('target_pos', target_pos)
    return {"message": "Target position updated successfully"}







# @app.post("/velocity")
# async def post_velocity():
#    with LogixDriver(PLC_IP) as plc:
#         Target_Position = plc.write('target_pos')
        
#         return {'actual_position': Target_Position.value}





# @app.post("/add_velocity")
# async def add_velocity(value):
#     velocity['value'] = value
#     return 'Successful posting'

# @app.delete('/delete_velocity')
# async def delete_velocity():
#     velocity['value'] = None
#     return 'Value set to None'

# @app.put('/update_velocity')
# async def update_velocity(value):
#     velocity['value'] = value
#     return velocity