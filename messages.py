from pydantic import BaseModel
#from .main import websocket_endpoint


class Message(BaseModel):
    id: int
    text: str


def message():
    return None