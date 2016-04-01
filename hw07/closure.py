def repeat(word):
    """
    repeat: returns a lambda function that takes 1 variable (n) that repeats the
    word n times

    Args:
        word (string): the word to repeat
    
    Returns:
        a lambda function that takes 1 variable (n) that repeats the word n
        times
    
    Example:
        repeat('hello')(3) --> 'hellohellohello'
    """

    return lambda x : word * x

r1 = repeat('hello')
r2 = repeat('goodbye')

print r1(3)
print r2(3)
print repeat('cool')(3)
