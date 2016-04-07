#{{{ 2016-04-05
#def inc(x):
#    return x + 1
#
#def dec(x):
#    return x - 1
#
#f = inc
#print f(5)
#
#flist = [inc, dec]
#
#print flist[1](5)
#
#def makeAdder(n):
#    def inner(x):
#        return x + n
#    return inner
#
#add3 = makeAdder(3)
#add5 = makeAdder(5)
#
#print add3(10)
#print add5(10)
#
#def make_counter():
#    count = [0]
#
#    def inc():
#        count[0] = count[0] + 1
#    
#    def dec():
#        count[0] = count[0] - 1
#
#    def reset():
#        count[0] = 0
#
#    def get():
#        return count[0]
#
#    return {
#            'inc': inc,
#            'dec': dec,
#            'reset': reset,
#            'get': get
#            }
#
#
#counter = make_counter()
#
#counter['inc']()
#print counter['get']()
#counter['inc']()
#print counter['get']()

#import random
#
#def doubler(f):
#    def inner():
#        name = f()
#        return name + name
#    return inner
#
#@doubler # <-- this is what binds the function and creates the closure
#def get_name():
#    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
#    return random.choice(names)
#
#print get_name()
#}}}

#{{{ 2016-04-06
def pt(n):
    """
    p: pythagorean triple

    Args:
        n (int): upper bound
    
    Returns:
        a list of pythagorean triples with largest less than n
    
    Example:
        pt(3) -> []
        pt(6) -> [[3,4,5]]
    """

    retL = []
    for i in range(1, n):
        for j in range(i, n):
            for k in range(j, n):
                if (i ** 2 + j ** 2 == k ** 2):
                    retL.append([i,j,k])
    return retL

def pt2(n):
    return [(a, b, c)
            for a in range(1, n)
            for b in range(a, n)
            for c in range(b, n) if
                a ** 2 + b ** 2 == c**2]

print pt2(3)
print pt2(3)
print pt2(6)
print pt2(7)
print pt2(50)
#}}}
