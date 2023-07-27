#ifndef person_hpp
#define person_hpp

#include <iostream>
#include <string>


class Person
{
    private:
    std::string name ;
    int age {};
    double income {};

    public:
    Person();
    Person(std::string name, int age, double income);
    Person(const Person &source);

    void information();
};

#include "person.cpp"

#endif /* person_hpp */