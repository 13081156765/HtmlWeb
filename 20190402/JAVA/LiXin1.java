package basic.day03;
import java.util.Scanner;

public class LiXin1
{
	public statice void main(String[] args)
	{
		Scannner sca = new Scanner(System.in);
		int total = sca.nextInt();
		int size = 10;
		int page = total%size==0 ? total/size : total/size+1;
		System.out.println(page);
	}
}