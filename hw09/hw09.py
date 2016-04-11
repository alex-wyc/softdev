from time import time

def show_name(f):
    def inner(*args):
        print f.func_name + '(' + str(*args) + '): ' + str(f(*args))
        return f(*args)
    return inner

def show_time(f):
    def inner(*args):
        init_t = time()
        ret_val = f(*args)
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

@show_time
#@show_name
def quicksort(l1):
    if len(l1) < 2:
        return l1

    return quicksort([x for x in l1[1:] if x < l1[0]]) + [l1[0]] + quicksort([x for x in l1[1:] if x >= l1[0]])

qs = quicksort([1,21, 13,5,5,5,1,25,0])
print qs

#fib_log = fib(4)
#print fib_log
