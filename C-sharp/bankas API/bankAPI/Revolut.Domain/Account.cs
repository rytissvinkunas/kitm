using Revolut.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Revolut.Domain
{
    public class Account
    {
        public Account()
        {
            Id = Guid.NewGuid();
            Transactions = new List<Transaction>();
        }


        public Account(double balance)
            :this()
        {
            Transactions = new List<Transaction>();
            Balance = balance;
            Transactions.Add(new Transaction {
                Mode = TransactionMode.CashIn,
                TransactionAmmount = balance,
               // ToAccount = this
            });
        }
        public Guid Id { get; set; }
        public double Balance { get; set; }
        public List<Transaction> Transactions { get; set; }
    }
}
