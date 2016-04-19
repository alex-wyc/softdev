def memoize(f):
    memo = {}
    def inner(*args):
        if args in memo:
            return memo[args]
        else:
            memo[args] = f(args)
            return memo[args]
    return inner

@memoize
def fib(n):
    n = n[0]
    if (n < 2):
        return n
    else:
        return fib(n-1) + fib(n-2)

print fib(10)
print fib(5)
