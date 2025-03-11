document.getElementById('btn-1').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-1');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-1');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p);
        }  
    } 
})

document.getElementById('btn-2').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-2');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-2');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p);
        }  
    } 
})

document.getElementById('btn-3').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-3');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-3');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p)
        }  
    } 
})

document.getElementById('btn-4').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-4');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-4');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p)
        }  
    } 
})

document.getElementById('btn-5').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-5');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-5');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p)
        }  
    } 
})

document.getElementById('btn-6').addEventListener('click', function (event){
    event.preventDefault();
    const taskAssign = document.getElementById('task-decrease').innerText; 
    const taskIncrease= document.getElementById('task-increase').innerText;
    const increaseUpdate = parseInt(taskIncrease);
    if(taskAssign >=0){
        alert('Board updated Successfully')
        const decrease= taskAssign - 1;
        document.getElementById('task-decrease').innerText = decrease;
        if(taskIncrease >=0){
            const increase = increaseUpdate + 1;
            document.getElementById('task-increase').innerText = increase;

            const container = document.getElementById('container-6');
            const currentTime = new Date().toLocaleTimeString();
            const cardContainer = document.getElementById('card-container-6');
            const cardContainerTitle = cardContainer.querySelector('h2').textContent;

            const p = document.createElement('p');
            p.innerText= `
            You have Completed The Task ${cardContainerTitle} at ${currentTime}
            
            `
            container.appendChild(p)

            
        }  
    } 
})