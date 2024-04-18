## FIBONACCI
* Every K-th Fibonacci number is multiple of F(k)

* F(nk) is a multiple of F(k) for all values of n and k from 1 up.

* F(2n) is a multiple of F(n)

	F(2n) = F(n)L(n) 
 
  where L(n) are the Lucas numbers: L(n) = F(n-1) + F(n+1)

* If a number is a factor of both F(n) and F(m) then it is also a factor of F(m+n)

* F(n+m) = F(m-1)F(n) + F(m)F(n+1)

* gcd(F(m), F(n)) = F(gcd(m,n))

* F(n) and F(n+1) are relatively prime

* Prime Fibonacci numbers frequently have prime indices in the fibonacci sequence, though this is not a strict rule

* The neighbours(F(n)^2 - 1, F(n)^2 + 1) of F(n)^2 are never prime, in fact they are always the product of two Fibonacci numbers
