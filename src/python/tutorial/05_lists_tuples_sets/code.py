python_list = ["Bob", "Rolf", "Anne"]
python_tuple = ("Bob", "Rolf", "Anne")
python_set = {"Bob", "Rolf", "Anne"}
# sets don"t keep the order and don't take duplicate elements

# Access individual items in lists and tuples using the index.

print(python_list[0])
print(python_tuple[0])
# print(python_set[0])  # This gives an error because sets are unordered, so accessing element 0 of something without order doesn't make sense.

# Modify individual items in lists using the index.

python_list[0] = "Smith"
# python_tuple[0] = "Smith"  # This gives an error because tuples are "immutable".

print(python_list)
print(python_tuple)

# Add to a list by using `.append`
python_list.append("Jen")
print(python_list)
# Tuples cannot be appended to because they are immutable.

# Add to sets by using `.add`
python_set.add("Jen")
print(python_set)

# Sets can't have the same element twice.
python_set.add("Bob")
print(python_set)
