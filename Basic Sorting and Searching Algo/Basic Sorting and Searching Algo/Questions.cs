using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_Sorting_and_Searching_Algo
{
    static class Questions
    {
        public static int SortedRotatedArray()
        {
            int[] a = { 6,1,2,3,4,5 };
            int l = 0, r = a.Length - 1;
            int mid = l + (r - l) / 2;
            if (a[mid] == l && a[l] < a[r])
                return a[l];

            if (a[mid] == l && a[l] > a[r])
                return a[r];

            if (a[mid] < a[mid + 1] && a[mid] < a[mid - 1])
                return a[mid];

            if (a[mid-1] < a[mid + 1])
                r = mid - 1;
            else
                l = mid + 1;
            
            while (l <= r)
            {
                mid = l + (r - l) / 2;
                if (mid == a.Length - 1)
                    return a[mid];
                if (a[mid] < a[mid + 1] && a[mid] < a[mid - 1])
                    return a[mid];
                if (a[mid] > a[l])
                    r = mid - 1;
                else
                    l = mid + 1;
            }
          

            return -1;
        }
    }
}
