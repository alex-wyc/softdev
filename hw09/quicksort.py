def quicksort(l1):
    if len(l1) < 2:
        return l1

    return quicksort([x for x in l1[1:] if x < l1[0]]) + [l1[0]] + quicksort([x for x in l1[1:] if x >= l1[0]])

print quicksort([1,21, 13,5,5,5,1,25,0])
