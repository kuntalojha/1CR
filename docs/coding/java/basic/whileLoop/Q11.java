/*
* Question: Count and print the total number of digits in a given number.
* @author: [Kuntal Ojh]
* Date: 05-07-2026
*/


import java.util.Scanner;

public class Q11 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int count = 0;
    while (n!=0) {
      count ++;
      n= n/10;
    }
    System.out.println("Total number of digits: "+ count);
    sc.close();
  }
}
