#include "person.hpp"

Person::Person(): name{"Unknown"}, age{0}, income{0.0} {}

Person::Person(std::string name, int age, double income): name{name}, age{age}, income{income} {}

Person::Person(const Person &source): name{source.name}, age{source.age}, income{source.income} {}

void Person::information()
{
    std::cout << "Name : " << name << std::endl;
    std::cout << "Age : " << age << std::endl;
    std::cout << "Income : " << income << std::endl;
    return ;
}