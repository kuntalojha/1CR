/*
* Question: Print all odd numbers between 1 and 100.
* @author: [Kuntal Ojh]
* Date: 02-07-2026
*/

public class Q04 {
  public static void main(String[] args){
    int i = 1;
    while (i<=100) {
      if(i%2!=0){
        System.out.println(i);
      }
      i++;
    }
  }
}
