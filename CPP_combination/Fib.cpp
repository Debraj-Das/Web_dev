#include <bits/stdc++.h>

#define int long long
#define el '\n'

int fib(int n);

int32_t main(int32_t argc, char **argv)
{
    std::vector<int> v;
    try
    {
        if (argc == 1)
            throw std::runtime_error("No arguments passed");
        else
        {
            for (int i = 1; i < argc; i++)
                v.push_back(atoi(argv[i]));
        }
    }
    catch (const std::exception &e)
    {
        std::cerr << e.what() << '\n';
        exit(1);
    }
    for (auto n : v)
        std::cout << fib(n) << el;
}

int fib(int n)
{
    if (n <= 1)
        return n;
    int arr[2][2] = {{1, 1}, {1, 0}};
    int ans[2][2] = {{1, 0}, {0, 1}};
    int temp[2][2], i, j, k;
    n -= 2;
    while (n)
    {
        if (n & 1)
        {
            memset(temp, 0, sizeof(temp));
            for (i = 0; i < 2; i++)
                for (j = 0; j < 2; j++)
                    for (k = 0; k < 2; k++)
                        temp[i][j] += ans[i][k] * arr[k][j];
            for (i = 0; i < 2; i++)
                for (j = 0; j < 2; j++)
                    ans[i][j] = temp[i][j];
        }
        memset(temp, 0, sizeof(temp));
        for (i = 0; i < 2; i++)
            for (j = 0; j < 2; j++)
                for (k = 0; k < 2; k++)
                    temp[i][j] += arr[i][k] * arr[k][j];
        for (i = 0; i < 2; i++)
            for (j = 0; j < 2; j++)
                arr[i][j] = temp[i][j];
        n >>= 1;
    }
    return ans[0][0] + ans[0][1];
}