from time import time

def show_name(f):
    def inner(*arg):
        print f.func_name + '(' + str(*arg) + '): ' + str(f(*arg))
        return f(*arg)
    return inner

def show_time(f):
    def inner(*arg):
        init_t = time()
        ret_val = f(*arg)
        fin_t = time()
        print "Time: %f" % (fin_t - init_t)
        return ret_val
    return inner

@show_time
@show_name
def fib(n):
    if (n < 2):
        return n
    else:
        return fib(n-1) + fib(n-2)

fib_log = fib(4)
print fib_log
