from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for all origins (you might want to restrict this in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Variable to store the velocity value
velocity = "20"
print(velocity)

# Endpoint to receive and store the velocity value
@app.post("/update_velocity")
def update_velocity(new_velocity: str):
    global velocity
    velocity = new_velocity
    return {"message": "Velocity updated successfully"}

# Endpoint to retrieve the stored velocity value
@app.get("/get_velocity")
def get_velocity():
    return velocity
