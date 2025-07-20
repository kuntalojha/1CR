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
- **NOTE**
  - _"I promise, before writing any program, I will first write its algorithm. I will follow this practice for every program from today onward."_

**Ex:13**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = i+7;
    i = i+9;
    i = i+25;
  }
}
```

**Ex:14**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = i+10;
    i = i+20;
    i = i+30;
  }
}
```

**Ex:15**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = 2*i;
  }
}
```
**Ex:16**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = 3*i;
  }
}
```

**Note:**
- i = 1*i => log<sub>1</sub> n
- i = 2*i => log<sub>2</sub> n
- i = 3*i => log<sub>3</sub> n
- i = 4*i => log<sub>4</sub> n
- i = 10*i => log<sub>10</sub> n
- i = 100*i => log<sub>100</sub> n

**Ex:17**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = 2*i;
    i = 3*i;
  }
}
```
**Ex:17A**
```c
main()
{
  i = 1;
  while(i<=n)
  {
    i = 2*i;
    i = 3*i;
    i = 4*i;
  }
}
```

**Ex:18**
```c
main()
{
  i = n;
  while(i>1)
  {
    i = i/2;
  }
}
```

**Ex:19**
```c
main()
{
  i = n;
  while(i>1)
  {
    i = i/2;
    i = i/3;
  }
}
```
**Ex:19A**
```c 
main()
{
  i = n;
  while(i>1)
  {
    i = i/5;
    i = i/7;
    i = i/2;
    i = i/3;
  }
}
```
**Note:**
- i = 1/i => log<sub>1</sub> n
- i = 2/i => log<sub>2</sub> n
- i = 3/i => log<sub>3</sub> n
- i = 4/i => log<sub>4</sub> n
- i = 10/i => log<sub>10</sub> n
- i = 100/i => log<sub>100</sub> n

**Ex:20**
```c 
main()
{
  i = n;
  while(i>1)
  {
    i = i/5;
    i = i/7;
    i = i/2;
    i = i/2;
    i = 4*i;
  }
}
```
**Ex:21**
```c
main()
{
  i = n;
  while(i>75){
    i = i/2;
    i = i/7;
  }
}
```

**Ex:22**
```c
main()
{
  i = 270;
  while(i<n){
    i = 2*i;
    i = 3*i;
    i = 4*i;
  }
}
```

**Ex:23**
```c
main()
{
  i= 2;
  while(i<n)
  {
    i = i^2;
  }
}
```
