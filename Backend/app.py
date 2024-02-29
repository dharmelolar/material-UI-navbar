# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel

# app = FastAPI()
# bot_velocity = 0
# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # @app.get("/quickstick")
# # def get_quickstick():
# #     tag_data = ""
# #     print(f"{tag_data=}")
# #     return {"tag_data": tag_data}


# @app.post("/update_velocity")
# async def update_velocity(request: Request):
#     data = await request.json()
#     bot_velocity = data.get("new_velocity")
#     print(f"New velocity received: {bot_velocity}")
#     return {"tag_data1": bot_velocity}

# class settings(BaseModel):
#     bot1_velocity : int


# @app.get('/settings')
# async def velocity():
