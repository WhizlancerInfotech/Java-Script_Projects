from nltk.chat.util import Chat, reflections

pairs = [
    ["hi|hello", ["Hello!", "Hi there!"]],
    ["what is your name?", ["I'm a chatbot!"]],
    ["how are you?", ["I'm doing great!", "I'm fine, thanks for asking."]],
]

chatbot = Chat(pairs, reflections)
chatbot.converse()
