import React from 'react';

import heap from '../../../../Assets/DotNetBasics/heap.PNG';

export default function GarbageCollector(){
    return(
        <div>
            <h2>Garbage Collector</h2>
            <p>It is used to provide the Automatic Memory Management feature. If there was no garbage collector, programmers would have to write the memory management codes which will be a kind of overhead on programmers.</p>
            <p>Automatic memory management is made possible by Garbage Collection in .NET Framework. When a class object is created at runtime, certain memory space is allocated to it in the heap memory. However, after all the actions related to the object are completed in the program, the memory space allocated to it is a waste as it cannot be used. In this case, garbage collection is very useful as it automatically releases the memory space after it is no longer required.</p>
            <p>Garbage collection will always work on <b>Managed Heap</b> and internally it has an Engine which is known as the <b>Optimization Engine.</b></p>
            <p>Garbage Collection occurs if at least one of multiple conditions is satisfied. These conditions are given as follows:</p>
            <ul>
                <li>If the system has low physical memory, then garbage collection is necessary.</li>
                <li>If the memory allocated to various objects in the heap memory exceeds a pre-set threshold, then garbage collection occurs.</li>
                <li>If the GC.Collect method is called, then garbage collection occurs. However, this method is only called under unusual situations as normally garbage collector runs automatically.</li>
            </ul>
            <p style={{textAlign:'center'}}>Phases in Garbage Collection</p>
            <ol>
                <li><b>Marking Phase:</b> A list of all the live objects is created during the marking phase. This is done by following the references from all the root objects. All of the objects that are not on the list of live objects are potentially deleted from the heap memory.</li>
                <li><b>Relocating Phase: </b>The references of all the objects that were on the list of all the live objects are updated in the relocating phase so that they point to the new location where the objects will be relocated to in the compacting phase.</li>
                <li><b>Compacting Phase:</b> The heap gets compacted in the compacting phase as the space occupied by the dead objects is released and the live objects remaining are moved. All the live objects that remain after the garbage collection are moved towards the older end of the heap memory in their original order.</li>
            </ol>
            <p style={{textAlign:'center'}}>Heap Generations in Garbage Collection</p>
            <p>The heap memory is organized into 3 generations so that various objects with different lifetimes can be handled appropriately during garbage collection. The memory to each Generation will be given by the Common Language Runtime(CLR) depending on the project size. Internally, Optimization Engine will call the Collection Means Method to select which objects will go into Gneration 1 or Generation 2.</p>
            <img src={heap} alt=""/>
        </div>
    )
}