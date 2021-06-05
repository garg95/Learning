import React from 'react';
// import microOrm from '../../../Assets/DotNetBasics/microOrm1.png';


import '../dotnetbasics.css';
export default function keywords() {
    return (
        <div className='DNBStyle'>
            <h1>Volatile</h1>
            <p>The volatile keyword is a convenience keyword for those who need to access member variables of a class or structure in multi-threaded conditions.</p>
            <p>The purpose of the volatile keyword is to tell the compiler that the variable you are marking as volatile may be accessed by multiple threads. There are certain optimizations that the csharp compiler makes when it compiles our code and unless the variable is marked as volatile, the compiler will make optimizations assuming that the variable will only be accessed by one thread at a time.</p>
            <p>Note that the volatile keyword can only be used against the following types of data:</p>
            <ul>
                <li>Reference types</li>
                <li>Types such as sbyte, byte, short, ushort, int, uint, char, float, and bool</li>
                <li>An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint</li>
                <li>Generic type parameters known to be reference types</li>
            </ul>
            <p>Only variables that are members of classes or structures can be declared as volatile.</p>
            <p><b>Note :</b>Please keep in mind that the volatile modifier does not force synchronization of loads and stores;instead it simply tells the compiler not to change the order of accesses to the field.By eliminating reordering optimizations, the code becomes more predictable from a programmer's perspective.</p>
            <hr />
            <h1>ReaderWriterLockSlim</h1>
            <ul>
                <li>Represents a lock that is used to manage access to a resource, allowing multiple threads for reading or exclusive access for writing.</li>
                <li>Use ReaderWriterLockSlim to protect a resource that is read by multiple threads and written to by one thread at a time.</li>
                <li>ReaderWriterLockSlim allows multiple threads to be in read mode, allows one thread to be in write mode with exclusive ownership of the lock, and allows one thread that has read access to be in upgradeable read mode, from which the thread can upgrade to write mode without having to relinquish its read access to the resource.</li>
            </ul>
            <p><b>Note :</b>ReaderWriterLockSlim is similar to ReaderWriterLock, but it has simplified rules for recursion and for upgrading and downgrading lock state. ReaderWriterLockSlim avoids many cases of potential deadlock. In addition, the performance of ReaderWriterLockSlim is significantly better than ReaderWriterLock. ReaderWriterLockSlim is recommended for all new development.</p>
            <ul>
                <li>A thread can enter the lock in three modes: read mode, write mode, and upgradeable read mode. </li>
                <li>Regardless of recursion policy, only one thread can be in write mode at any time. When a thread is in write mode, no other thread can enter the lock in any mode. Only one thread can be in upgradeable mode at any time. Any number of threads can be in read mode, and there can be one thread in upgradeable mode while other threads are in read mode.</li>
                <li>a thread that initially entered read mode is not allowed to upgrade to upgradeable mode or write mode, because that pattern creates a strong probability of deadlocks. For example, if two threads in read mode both try to enter write mode, they will deadlock. Upgradeable mode is designed to avoid such deadlocks.</li>
                <li>If a thread is in upgradeable mode then other threads cannot enter Write mode.</li>
                <li>ReaderWriterLockedSlim inherits from Idisposable so at the end if this object is not needed it can be disposed.</li>
            </ul>
            <hr />
            <h1>Interlocked</h1>
            <p>Provides atomic operations for variables that are shared by multiple threads.</p>
            <p style={{color:'red'}}>How <b>Interlocked</b> is different from simple <b>lock</b></p>
            <p><b>Interlocked.Exchange(ref resource, value)</b> This Exchange replaces value of resource with value and returns the previous or original value of resource.</p>
            <hr/>
            <h2>General scenario : Lets say we have counter and this counter can only be incremented. So which would be best to implement this volatile or lock or Interlocked </h2>
            <ol>
                <li><b>Volatile (worst implementation):</b>This on its own isn't actually safe at all.The point of volatile is that multiple threads running on multiple CPUs can and will cache data and re-order instructions.If it is not volatile, and CPU A increments a value, then CPU B may not actually see that incremented value until some time later, which may cause problems.If it is volatile, this just ensures the two CPUs see the same data at the same time. It doesn't stop them at all from interleaving their reads and write operations which is the problem you are trying to avoid.</li>
                <li><b>lock(this.locker)this.counter++; </b>This is safe to do (provided you remember to lock everywhere else that you access this.counter). It prevents any other threads from executing any other code which is guarded by locker. Using locks also, prevents the multi-CPU reordering problems as above, which is great.The problem is, locking is slow, and if you re-use the locker in some other place which is not really related then you can end up blocking your other threads for no reason.</li>
                <li><b>Interlocked.Increment(ref this.counter);</b>This is safe, as it effectively does the read, increment, and write in 'one hit' which can't be interrupted. Because of this, it won't affect any other code, and you don't need to remember to lock elsewhere either. It's also very fast</li>
            </ol>
            <hr/>
            <h1>Yield</h1>
            <p>There are 2 basic uses of yield keyword.</p>
            <ol>
                <li>Custom Iteration</li>
                <li>Stateful iteration</li>
            </ol>
            <p>When we use yield keyword control moves from source to caller and from caller to sources back and forth</p>
            <p>This yield keyword is used with IEnumerable or IEnumerator</p>
            <p>You can use a <b>yield break </b>statement to end the iteration</p>
        </div >
    )
}