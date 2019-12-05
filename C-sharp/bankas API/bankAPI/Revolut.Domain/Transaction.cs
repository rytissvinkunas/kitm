using Revolut.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Revolut.Domain
{
    public class Transaction
    {
        public Transaction()
        {
            Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
        public  TransactionMode Mode { get; set; }
        public double TransactionAmmount { get; set; }
        //public Account FromAccount { get; set; } //kolkas sito nenaudojam todel reik uzkomentint
        //public Account ToAccount { get; set; }
    }
}
