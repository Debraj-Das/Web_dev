#include <bits/stdc++.h>
using namespace std;

#define el '\n'

int dou {};

int main()
{
    /*
     cout << sizeof(long double) << el;
     cout << LLONG_MAX << el;
     double a = 1.0 / 0.0; // Infinity if 1.0 / 0.0 is not defined
     auto p = INFINITY ;
     cout << p << el;
     cout << a << el;
     a = 0.0 / 0.0; // NaN if 0.0 / 0.0 is not defined
     cout << a << el;
     */

    cout << "Date is " << __DATE__ << endl;
    cout << "Time is " << __TIME__ << endl;
    cout << "Line is " << __LINE__ << endl;
    cout << "File is " << __FILE__ << endl;
    cout << "ANSI is " << __STDC__ << endl;
    cout << "C++ is " << __cplusplus << endl;

    // cout<<"size of size_t : "<<sizeof(size_t)<<endl;

    // int arr[]{12, 53, 41, 141, 52, 1345};
    // cout << size(arr) << el;    // size function returns the size of the array
    // for(int &x : arr)
    //     cout << x << " ";
    // cout << el;

    // std::vector<int> v{1, 2, 3, 4, 5};
    // v.push_back(6);
    // cout<<v.capacity()<<el;

    // try to access the memory location of the outside of allocated memory
    // try
    // {
    //     int i = 0 , *ptr = &i ;
    //     while(true)
    //     {
    //         i++ ;
    //         cout<<i<<" ) "<<ptr<<" : "<<*ptr<<el;
    //         ptr++;
    //         if(ptr == nullptr)
    //             throw std::runtime_error("Null pointer exception");
    //     }
    // }
    // catch(const std::exception& e)
    // {
    //     std::cerr << e.what() << '\n';
    // }

    // std::string s = "Hello World";
    // cout << s << el;

    // const char *s {"Hello World"};
    // cout << s << el;
    // char c[] = "Hello World";
    // c[0] = 'B';
    // cout << c << el;

    // std::string s = "Hello World";
    // cout<<s.c_str()<<el;

    /*
    int *ptr;
    for (int i = 0; i < 10; i++)
    {
        ptr = new(std::nothrow) int[100000000];
        if(ptr == nullptr)
            cout<<"Memory allocation failed"<<el;
        else
            cout<<"Memory allocation success"<<el;
    }
    cout << "Program end well" << el;
    */

   cout<< dou << el;

    return 0;
}
