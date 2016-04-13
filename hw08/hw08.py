def union(l1, l2):
    """
    union: return l1 union l2

    Args:
        l1 (list): first list
        l2 (list): second list
       
    Example:
        union([1,2,3], [2,3,4]) -> [1,2,3,4]
    """

    return [x for x in l1 if x in l1 and x not in l2] + l2

print union([1,2,3], [2,3,4])

def intersection(l1, l2):
    """
    intersection: return l1 intersect l2

    Args:
        l1 (list): first list
	l2 (list): second list
    
    Example:
        intersection([1,2,3], [2,3,4]) -> [2,3]
    """

    return [x for x in l1 if x in l1 and x in l2]

print intersection([1,2,3], [2,3,4])

def set_difference(l1, l2):
    """
    set_difference: l1 \ l2

    Example:
        set_difference([1,2,3], [2,3,4]) -> [1]
    """

    return [x for x in l1 if x in l1 and x not in l2]

def symmetric_difference(l1, l2):
    return set_difference(union(l1, l2), intersection(l1, l2))

def cartesian_product(l1, l2):
    return [(a, b) for a in l1 for b in l2]

print cartesian_product([1,2,3], ['red', 'white', 'blue'])
