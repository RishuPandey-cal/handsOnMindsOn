#include <bits/stdc++.h>

using namespace std;

bool isPalindrome(long long n) {
    string s = to_string(n);
    string reversed_s = s;
    reverse(reversed_s.begin(), reversed_s.end());
    return s == reversed_s;
}

long long reverseAndAdd(long long n) {
    string s = to_string(n);
    reverse(s.begin(), s.end());
    try {
        long long reversed_n = stoll(s);
        return n + reversed_n;
    } catch (const out_of_range& e) {
        return n;
    }
}

bool isLychrel(long long n) {
    for (int i = 0; i < 50; ++i) {
        n = reverseAndAdd(n);
        if (isPalindrome(n)) {
            return false;
        }
    }
    return true;
}

int countLychrelNumbers(int limit) {
    int lychrelCount = 0;
    for (int num = 1; num < limit; ++num) {
        if (isLychrel(num)) {
            lychrelCount++;
        }
    }
    return lychrelCount;
}

int main() {
    int limit = 10000;
    int result = countLychrelNumbers(limit);
    cout << "Number of Lychrel numbers below " << limit << " is: " << result << endl;
    return 0;
}
