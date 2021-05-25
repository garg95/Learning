using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_Sorting_and_Searching_Algo
{
    class Program
    {
        static void Main(string[] args)
        {
            // In insertion sort we keep shifting smaller element to left 
            //best case complexity O(n)
            //worst case complexity O(n2)
            //InsertionSort();

            //here we keep swapping k and k+1 if k is bigger than k+1 index
            //Time complexity Best case - O(1)  worst case O(n)
            //Comparisons Best case - O(n)  worst case O(n)
            // Total complexity - Best case O(n)  worst case O(n2)
            //BubbleSort();

            //Complexity O(log n)
            //BinarySearchMain();

            #region questions
            int minValue=Questions.SortedRotatedArray();
            Console.WriteLine(minValue);
            #endregion

        }
        public static void InsertionSort()
        {
            int[] a = { 8, 4, 9, 2, 1 };
            for (int i = 1; i < a.Length; i++)
            {
                for (int k = i - 1; k >= 0; k--)
                {
                    if (a[k] > a[k + 1])
                    {
                        int t = a[k + 1];
                        a[k + 1] = a[k];
                        a[k] = t;
                    }
                }
            }
            a.ToList().ForEach(x => Console.Write(x + " "));
        }

        public static void BubbleSort()
        {
            int[] a = { 8, 4, 9, 2, 1 };
            for(int i=0;i<a.Length-1;i++)
            {
                for(int k=0;k<a.Length-i-1;k++)
                {
                    if (a[k] > a[k + 1])
                    {
                        int t = a[k];
                        a[k] = a[k+ 1];
                        a[k + 1] = t;
                    }
                }
            }
            a.ToList().ForEach(x => Console.Write(x + " "));
        }

        public static void BinarySearchMain()
        {
            int[] a = { 1, 5, 8, 9, 12, 17, 19, 25, 29, 40 };
            int x = 19;
            int length = a.Length;
            //Console.WriteLine(BinarySearchRecursive(a,0,length-1,x));
            Console.WriteLine(BinarySearchIterative(a, 0, length - 1, x));

        }
        
        public static int BinarySearchRecursive(int[] a,int l, int r,int x)
        {
            if(r>=l)
            {
                // why we are finding middle like this we can find middle like this as well (l+r)/2
                /*
                 * But if we calculate the middle index like this means our code is not 100% correct, it contains bugs.
                 * That is, it fails for larger values of int variables low and high. Specifically, it fails if the sum of low and high is 
                   greater than the maximum positive int value(2^31 – 1 ).
                */
                int mid = l+(r-l) / 2;   

                if (a[mid] == x)
                    return mid;
                if(x<a[mid])
                {
                    return BinarySearchRecursive(a, l, mid - 1, x);
                }
                return BinarySearchRecursive(a, mid+1, r, x);
            }
            return -1;
        }
        public static int BinarySearchIterative(int[] a, int l, int r, int x)
        {
            while(l<=r)
            {
                int mid = l + (r - l) / 2;
                if (a[mid] == x)
                    return mid;
                if (x < a[mid])
                    r = mid - 1;
                else
                    l = mid + 1;
            }
            return -1;
        }

    }
}
