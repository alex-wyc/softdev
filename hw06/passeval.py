from string import ascii_lowercase, ascii_uppercase
numbers = '0123456789'
sp_chars = '.?!&#,;:-_*'

password = raw_input("Enter a password for evaluation: ")

def is_valid_pass(password):
    """
    is_valid_pass: returns a boolean satisfying the minimum requirement:
        > at least 1 upper case character
        > at least 1 lower case character
        > at least 1 number

    Args:
        password (string): the password to validate
    
    Returns:
        true or false
    
    Example:
        is_valid_pass('1234') -> False
        is_valid_pass('127as') -> False;
        is_valid_pass('abCD1') -> True
    """
    lower_validation = sum([1 if l in ascii_lowercase else 0 for l in password]) > 0
    upper_validation = sum([1 if l in ascii_uppercase else 0 for l in password]) > 0
    num_validation = sum([1 if l in numbers else 0 for l in password]) > 0
    return lower_validation and upper_validation and num_validation

#print is_valid_pass('1234') 
#print is_valid_pass('127as')
#print is_valid_pass('abCD1')

def rate_password(password):
    """
    rate_passwor: rates a password basd on the strengh on a scale of 1-10

    Args:
        password (string): the password to rate
    
    Returns:
        a rating (int) between 1 and 10
        The score is broken down to 5 categories:
        lower case: 2
        upper case: 2
        sp. chars: 2
        numbers: 2
            0 if not present
            1 if has 1 character
            2 otherwise

        length: 2
            0 if < 7
            1 if < 15 but >= 7
            2 otherwise

    Example:
        rate_password("myNoobPass1234")
    """
    lower_score = min(sum([1 if l in ascii_lowercase else 0 for l in password]), 2)
    upper_score = min(sum([1 if l in ascii_uppercase else 0 for l in password]), 2)
    sp_score = min(sum([1 if l in sp_chars else 0 for l in password]), 2)
    num_score = min(sum([1 if l in numbers else 0 for l in password]), 2)

    if len(password) >= 15:
        len_score = 2
    elif len(password) >= 7:
        len_score = 1
    else:
        len_score = 0

    return lower_score + upper_score + sp_score + num_score + len_score

print rate_password(password)
