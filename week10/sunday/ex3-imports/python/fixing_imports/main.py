from module_1 import get_letters
from module_4 import get_letters as get_letters4
from module_5 import get_letters5
from last.w_z import get_last_letters
from last.t_v import get_letters as get_t_v
from last.medium import q_s
from middle import get_m_p as middle

def get_alphabet():
    return get_letters() + get_letters4() + get_letters5() + \
           middle.m_p() + q_s.get_letters() + get_t_v() + get_last_letters()


print(get_alphabet())