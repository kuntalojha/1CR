/*
* Question: Print the multiplication table of a given number from n × 1 to n × 10.
* @author: [Kuntal Ojh]
* Date: 02-07-2026
*/


import java.util.Scanner;

public class Q05 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the table number ");
    int n = sc.nextInt();
    int i = 1;
    System.out.println("Multiplication Table of " + n);
    while (i<11) {
      System.out.println(n + "*" + i + "=" + n * i);
      i++;
    }
    sc.close();
  }
}
