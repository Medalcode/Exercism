"""Functions for creating, transforming, and adding prefixes to strings."""


def add_prefix_un(word):
    """Take the given word and add the 'un' prefix.

    :param word: str - containing the root word.
    :return: str - of root word prepended with 'un'.
    """
    return "un"+word

def make_word_groups(vocab_words):
    """Transform a list containing a prefix and words into a string with the prefix followed by the words with prefix prepended.

    :param vocab_words: list - of vocabulary words with prefix in first index.
    :return: str - of prefix followed by vocabulary words with
            prefix applied.

    This function takes a `vocab_words` list and returns a string
    with the prefix and the words with prefix applied, separated
     by ' :: '.

    For example: list('en', 'close', 'joy', 'lighten'),
    produces the following string: 'en :: enclose :: enjoy :: enlighten'.
    """

    if vocab_words[0] == 'en':
        return ' :: en'.join(vocab_words)
    elif vocab_words[0] == 'pre':
        return ' :: pre'.join(vocab_words)
    elif vocab_words[0] == 'auto':
        return ' :: auto'.join(vocab_words)
    else:
        return ' :: inter'.join(vocab_words)


def remove_suffix_ness(word):
    """Remove the suffix 'ness' from the word while keeping spelling in mind.

    :param word: str - of word to remove suffix from.
    :return: str - of word with suffix removed & spelling adjusted.

    For example: "heaviness" becomes "heavy", but "sadness" becomes "sad".
    """
    # Verificar si la palabra termina con "ness"
    if len(word) > 4 and word[-4:] == "ness":
        root = word[:-4]  # Eliminar el sufijo "ness"
        # Verificar si la raíz termina en "i" y antes de la "i" hay una consonante
        if len(root) > 1 and root[-1] == "i" and root[-2] not in "aeiou":
            root = root[:-1] + "y"  # Reemplazar "i" con "y"
        return root
    return word

    


def adjective_to_verb(sentence, index):
    """Convert the adjective at the given index in the sentence to a verb by adding 'en'.

    :param sentence: str - the sentence containing the adjective.
    :param index: int - the index of the adjective in the sentence.
    :return: str - the adjective converted to a verb.
    """
    words = sentence.split()
    adjective = words[index].strip('.,!?')  # Eliminar puntuación
    return adjective + 'en'

    