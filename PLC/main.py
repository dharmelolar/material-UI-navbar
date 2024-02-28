

from fastapi import FastAPI
from pycomm3 import LogixDriver
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

PLC_IP= '192.168.1.10/0'
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulating PLC tag values
position = {'value': 0}
global velocity
velocity = {'value': 0}


@app.get("/velocity")
async def get_velocity():
   with LogixDriver(PLC_IP) as plc:
        actual_position = plc.read('XY121_Z1.StartActualPosition')
        print("Actual Position:", actual_position.value)
        return {'actual_position': actual_position.value}





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