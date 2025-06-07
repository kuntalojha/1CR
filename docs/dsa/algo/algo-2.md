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
```
**Ex:06**
```c
main()
{ 
  i = 1;
  while(i<=n)
  {
    x = y+z;
    i=i+1;
  }
}
```

**Ex:07**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = i+1;
  }
}
```

**Ex:07**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = i+5;
  }
}
```

**Ex:08**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = i+5;
    i = i+7;
    i = i+100;
  }
}
```

**Ex:09**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-1;
  }
}
```
**Ex:09**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-100;
  }
}
```

**Ex:10**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-5;
    i = i-7;
    i = i-100;
  }
}
```

**Ex:11**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-50;
    i = i-25;
    i = i-30;
  }
}
```
**Ex:11**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-50;
    i = i-25;
    i = i-30;
    i = i+40;
  }
}
```

**Ex:12**
```c
main()
{
  i = n;
  while(i>=1)
  {
    i = i-7;
    i = i+9;
    i = i-50;
    i = i+60;
  }
}
```
