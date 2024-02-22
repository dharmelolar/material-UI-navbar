from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get("/quickstick")
# def get_quickstick():
#     tag_data = ""
#     print(f"{tag_data=}")
#     return {"tag_data": tag_data}


@app.post("/update_velocity")
async def update_velocity(request: Request):
    data = await request.json()
    new_velocity = data.get("new_velocity")
    print(f"New velocity received: {new_velocity}")
    return {"tag_data1": new_velocity}
