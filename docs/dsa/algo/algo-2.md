#  **Analysing Algorithm (TC & SC)**
### **Apriori Analysis:**
- It is a determination of order of magnitude of a statement.

**Ex:04**
```c
main()
{
  x = a+b;
  y = c+d;
  e = f+g;
  g = e+y;
  h = x+c;
}
```

**Ex:05**
```c
main()
{
  x = y+z;
  for(i=1;i<=n;i++)
    x = y+z;
  for(i=1;i<=n;i++)
  {
    for(j=1;j<=n/2;j++)
    {
      x = y+z;
    }
  }
}