public class LiXin
{
	public static void main(String[] args)
	{
		int x = 5;
		int y = f(x);
		System.out.println(y);
		x = 4;
		y = z(x);
		System.out.println(y);
	}
	public static int f(int x)
	{
		int y = x*x-2*x+4;
		return y;
	}
	//public static int z(int x)
	{
		//int y = x%3;
		//return y;
	}
	public static int z(int x)
	{
		int y = x++;
		return y;
	}
}