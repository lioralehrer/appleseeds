class Junction:
    def __init__(self, name, x=0, y=0):
        self.name = name
        self.x = x
        self.y = y

    def change_core(self, x, y):
        self.x = x
        self.y = y

    def add_core(self, x, y):
        self.x += x
        self.y += y

    def __repr__(self):
        return f"name: {self.name} x: {self.x} y: {self.y}"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y



