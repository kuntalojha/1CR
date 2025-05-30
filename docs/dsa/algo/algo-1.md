#  **Analysing Algorithm (TC & SC).**

### **Algorithms Definition:**
 - It is a combination of sequence of finite steps to solve a particular problem.
**Example:**
 > m = 75, n = 200 add m and n.
 
 **Algorithm:**
```
 AddTwoNumbers() 
 {
   1. Take 2-numbers m && n.
   2. Add m && n store in c.
   3. print the variable c.
 }
```

### **Properties of Algorithm:**
 1. It should stop after finite time.
 2. It should produce at least one output.
 3. - It should be deterministic. (OR)
    - It should be unambiguous.
 4. It should effective.

### **Steps to design an algorithm:**
1. Problem definition. (know the problem clearly)
 - Example:
   ```md
    Input₁ ----- Output₁
    Input₂ ----- Output₂
    Input₃ ----- Output₃
    ----------
    ----------
    Inputₙ ----- Outputₙ
   ```
2. Design the algorithm.
 - Example:
    ```md
    Divide And Conquer (DAC)
    Greedy Technique (GT)
    Dynamic Programming (DP) 
    Branch and Bound (BnB)/(B.B)
    Backtracking (BT)
   ```
3. Flow chart.
4. Testing OR Verification.
5. Analysis (TC,SC).
6. Coding OR Implementation.
> Design algorithms And  Analysis (TC,SC) of the algorithms is deficult to implement. That's why the subject is called as "Design and Analysis of Algorithm (DAA)" or Algorithm Design and Analysis (ADA) or Algorithm Analysis And Design (AAD)

### **Analysis:**
- To solve any problem if you have morethan one solution the best solution will be decided by analysis based on two factors:
   - 1. Time Complaxcity.
   - 2. Space Complaxcity.

### **Time Complaxcity:**
- Time Complaxcity of a program = Time required for compiled + Time required for running.
```md
    T(Program) = T(Compiled)+T(Running).
               = Compiler + Prosessor.
               = Software + Hardware.
               = Language of Compiler + Type of Hardware.
```
### **Analysis will be two types:**
1. Apostiary Analysis.
2. Apriori Analysis.

### **Deference between Apostiary Analysis and Apriori Analysis:**
| Apostiary Analysis. | Apriori Analysis. |
|:--------------------|:------------------|
|1. It is  based on language of compiler and type of CPU. |1. It is independent of language of compiler and type of CPU. |
|2. It provides exact answer. |2. It provides approximate answer. |
|3. Deffrent answer from deffrent system. |3. Same answer in all the system. |

### **Apriori Analysis:**
- It is a determination of order of magnitude of a statement.

**Ex:01**
```c
main()
{
   x = y+2;
}
```

**Ex:02**
```c
main()
{
   x = y + z;
   for(i=0;i<=n;i++)
      x = y + z;
}
```

**Ex:03**
```c
main()
{
   x = y + z;
   for(i=0;i<=n;i++)
      x = y + z;
   for(i=0;i<=n;i++)
   {
      for(j=0;j<=n;j++)
         x = y + z;
   }
}
```