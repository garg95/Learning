using System;
using System.Collections.Generic;

namespace LazyLoading
{
    public class LazyLoading
    {
        
        public void GetAllData()
        {
            Customer c = new Customer();
            string customerName = c.CustomerName;
            foreach(Order o in c.Orders)
            {

            }
        }
    }

    public class Customer
    {
        private string _customerName { get; set; }
        private Lazy<List<Order>> _orders = null;
        public Customer()
        {
            _customerName = "Vishal";
            _orders = new Lazy<List<Order>>(() => LoadOrders());
        }
        
        public string CustomerName
        {
            get { return _customerName; }
            set { _customerName = value; }
        }
        
        public List<Order> Orders
        {
            get
            {
                // we can also call loadorders inside this get to make it lazy loading
                //_orders = LoadOrders();
                return _orders.Value;
            }
        }
        public List<Order> LoadOrders()
        {
            List<Order> temp = new List<Order>();
            Order o = new Order();
            o.OrderId = 1;
            o.OrderName = "Item 1";
            temp.Add(o);
            o = new Order();
            o.OrderId = 2;
            o.OrderName = "Item 2";
            temp.Add(o);
            return temp;
        }
    }
    public class Order
    {
        public int OrderId { get; set; }
        public string OrderName { get; set; }
    }

}
