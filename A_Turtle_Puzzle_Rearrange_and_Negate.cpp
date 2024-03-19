// Kapish Upadhyay - The Programming Club
// CF ID => PCxOM

#include<bits/stdc++.h>
using namespace std;
#define int_MAX 1000000000000000000
#define int long long
#define pb push_back
#define ff first
#define ss second
#define arr(v,n)  for(int i=0;i<(n);i++) {int X; cin >> X; v.push_back(X);}
#define MOD 1000000007
#define yes cout<<"YES"<endl
#define no cout<<"NO"<endl
#define bltz  __builtin_popcount
#define endl '\n'
// #include <ext/pb_ds/assoc_container.hpp>
// #include <ext/pb_ds/tree_policy.hpp>
// using namespace __gnu_pbds;
// typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> ordered_set;

void primeFactors(vector<int>& pfact ,int n){  
    while (n % 2 == 0){  
        pfact.push_back(2);
        n = n/2;  
    }  
    for (int i = 3; i <= sqrt(n); i = i + 2){  
        while (n % i == 0){  
            pfact.push_back(i);
            n = n/i;  
        }  
    }  
    if (n > 2){
        pfact.push_back(n);
    }
}  
  
void solve(){
    int n;
    cin >> n;
    vector <int> v;
    
}
signed main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int tc=1;
    cin >> tc;
    while(tc--){
        solve();
        cout << '\n';
    }
    return 0;
}