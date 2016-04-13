def repeat(s):
    def times(x):
        return s * x
    return times

r1 = repeat('hello')
