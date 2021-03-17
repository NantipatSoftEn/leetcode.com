import java.util.Arrays;

class Boards {
    int[][] tiles;

    public Boards(int[][] tiles) {
        this.tiles = tiles;
    }

    public String toString() {
        return Arrays.deepToString(this.tiles);
    }

    public int tileAt(int row, int col) {
        return this.tiles[row][col];
    }

    public int size() {
        return this.tiles.length;
    }

}