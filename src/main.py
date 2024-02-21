from fastapi import FastAPI
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



# FastAPI route 
@app.get("/quickstick")
def Quickstick():
    tag_data = "hello"
    print(tag_data)
    return tag_data

@app.post("/update_velocity")
def Quickstick():
    tag_data1 = ""
    print('tag', tag_data1)
    return tag_data1
