import random
class Pokemon:
    def __init__(self):
        self.strength = random.randint(1,6)
        self.name = "pokemon"
        self.attack_noise = ""
    
    def getAttackNoise(self):
        return self.attack_noise     

    def getName(self):
        return self.name     
    
    def isDead(self):
        return self.strength <= 0 

    def attack(self, defender_pokemon):
        self.bonus = random.randint(1,4)
        defender_pokemon.bonus = random.randint(1,4)
        my_pokemon_total = self.strength + self.bonus
        defender_pokemon_total = defender_pokemon.strength + defender_pokemon.bonus
        if my_pokemon_total>defender_pokemon_total :
            self.strength +=my_pokemon_total - defender_pokemon_total
            return True
        else: 
            return False    