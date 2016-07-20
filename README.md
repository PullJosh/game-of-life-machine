# Game of Life Machine
Create your own [game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).


### Instructions
Each game of life consists of a set of rules which dictate how the grid cells behave. In the Game of Life Machine, these rules are represented by a group of 18 checkboxes:  
![img](https://github.com/PullJosh/game-of-life-machine/blob/master/gameOfLifeCheckboxes.png?raw=true)

The checkboxes appear in a table, and their location in the table determines which type of cell that checkbox will influence. Along the top of the table there is a `0` and a `1`. The `0` represents cells which are currently "off", or white, and the `1` represents cells which are currently "on", or black.

Along the left side of the table are the numbers 0 to 8. These numbers represent the number of surrounding cells which are turned "on".

Each checkbox, then, corresponds to one possible type of grid cell. The top-right checkbox, for example, will apply to a cell which is currently turned on but has no "on" neighbors. The bottom-left checkbox will apply to cells which are currently off but are completely surrounded by "on" cells (each cell has 8 neighbors).

If a checkbox is checked, then any cells which match its type will turn on. If the checkbox is unchecked, then any matching cells will turn off.

##### An example
By default, the checkboxes are set up to create Conway's Game of Life. Here are Conway's Rules ([thanks, wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules)):

    1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    2. Any live cell with two or three live neighbours lives on to the next generation.
    3. Any live cell with more than three live neighbours dies, as if by over-population.
    4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

This rules list assumes that any cells which meet none of the conditions above will remain unchanged. Let's start by doing that:

       0   1 
    0 [ ] [✓]
    1 [ ] [✓]
    2 [ ] [✓]
    3 [ ] [✓]
    4 [ ] [✓]
    5 [ ] [✓]
    6 [ ] [✓]
    7 [ ] [✓]
    8 [ ] [✓]

By checking only boxes on the right, we've created a game in which everything stays the same at all times. Any cells which are off (represented by a 0 at the top of the checkbox grid) will remain off (because the boxes are unchecked), and any cells which are on will remain on.

Now let's get Conway-specific: The first rule says that any live cell (that is, one of the checkboxes on the right) with fewer than two neighbors dies. This means that the checkboxes on the right cooresponding to 0 neighbors and 1 neighbor need to be unchecked, which will result in this:

       0   1 
    0 [ ] [ ]
    1 [ ] [ ]
    2 [ ] [✓]
    3 [ ] [✓]
    4 [ ] [✓]
    5 [ ] [✓]
    6 [ ] [✓]
    7 [ ] [✓]
    8 [ ] [✓]

The second rule says that any live cell with two or three live neighbors will live on. Those two boxes are already checked, so we can move on to rule three.

The third rules tells us any live cell with more than three live neighbours dies. This means we uncheck every box on the right with more than three neighbors, resulting in this:

       0   1 
    0 [ ] [ ]
    1 [ ] [ ]
    2 [ ] [✓]
    3 [ ] [✓]
    4 [ ] [ ]
    5 [ ] [ ]
    6 [ ] [ ]
    7 [ ] [ ]
    8 [ ] [ ]

The fourth and final rule says any dead cell with exactly three live neighbours becomes a live cell. We do this by checking the box on the left in the "3 neighbors" row, resulting in this final checkbox table:

       0   1 
    0 [ ] [ ]
    1 [ ] [ ]
    2 [ ] [✓]
    3 [✓] [✓]
    4 [ ] [ ]
    5 [ ] [ ]
    6 [ ] [ ]
    7 [ ] [ ]
    8 [ ] [ ]
    
That's all there is to it! Now it's your turn to experiment and design your own game of life. Have fun!
