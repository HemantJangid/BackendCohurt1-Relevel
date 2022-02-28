#include<bits/stdc++.h>
using namespace std;
map<char,int>pos;
bool comp(string a,string b){
    int n=min(a.size(),b.size());
    for(int i=0;i<n;i++){
        if(pos[a[i]]<pos[b[i]]){
            return true;
        }
        if(pos[a[i]]>pos[b[i]]){
            return false;
        }
    }
    return b.size()>a.size();
}
int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int a,b;
    string s;
    cin>>a;
    while(a--){
        cin>>s;
        cin>>b;
        int i=0;
        for(auto a:s){
            pos[a]=i;
            i++;
        }
        vector<string>sa;
        while(b--){
            cin>>s;
            sa.push_back(s);
        }
        sort(sa.begin(),sa.end(),comp);
        for(auto d:sa){
            cout<<d<<"\n";
        }
    }
    return 0;
}