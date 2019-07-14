from .q import get_q
import s.get_s


def get_letters():
    return get_q() + ["r"] + get_s()
