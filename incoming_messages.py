from fastapi import APIRouter

from message import Message

router = APIRouter(
    prefix="/messages",
    tags=["messages"]
)

text = []

message = Message(
    id=1,
    text="dfbfb",
)

text.append(message)

message = Message(
    id=2,
    text="kdvnkdokfebe",
)

text.append(message)


@router.get("/")
async def message():
    return text


@router.get("/{id}")
async def sms(id: int):
    for message in text:
        if message.id == id:
            return message


@router.post("/") #Cjj
async def add_text(message: Message):
    message.id = text[-1].id + 1
    text.append(message)
    return text


@router.put("/{id}")
async def update_text(id: int, message: Message):
    for all_message in text:
        if all_message.id == id:
            all_message.text = message.text
            return all_message


@router.delete("/{id}")
async def del_text(id: int):
    for message in text:
        if message.id == id:
            text.remove(message)
