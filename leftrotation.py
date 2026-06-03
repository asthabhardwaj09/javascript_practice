def rotLeft(arr, d):
    result = []

    for i in range(d, len(arr)):
        # print(i)
        result.append(arr[i])
        

    for i in range(d):
        result.append(arr[i])

    return result

result =rotLeft([1,2,3,4,5],3)
# print(result)


def rotLeft(arr, d):
    n = len(arr)
    print (n)
    result1 = []

    for i in range(d, n):
        result1.append(arr[i])

    for i in range(d):
        result1.append(arr[i])

    return result1
result1 =rotLeft([1,2,3,4,5],3)
