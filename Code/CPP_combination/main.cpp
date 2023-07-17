#include <iostream>
#include "person.hpp"

// int dou {}; // global variable is always initialized to 0

template <typename T>
T add(T a, T b)
{
    return a + b;
}

int main()
{
    Person p1;
    std::cout << add(1, 2) << std::endl;
    return 0;
}

