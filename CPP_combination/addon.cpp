#include <bits/stdc++.h>
using namespace std;

#define int long long
#define el '\n'
#define f(i, a, b) for (int i = a; i < b; i++)
#define fr(i, a, b) for (int i = a; i >= b; i--)

int32_t main(int32_t argc, char **argv)
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    if (argc > 1)
        freopen(argv[1], "r", stdin);
    else
        freopen("input.txt", "r", stdin);

    int n;
    cin >> n;
    f(i, 0, n)
    {
        cout << (i * i) << el;
    }
    return 0;
}
